using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FinanceTracker.Data;
using FinanceTracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;


namespace FinanceTracker.Controllers
{
    [EnableCors("CORSPolicy")]
    public class AssetController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public AssetController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            this._userManager = userManager;
        }

        // POST: 'api/asset/list'
        // gets the user's asset list
        [HttpPost]
        [Route("api/asset/list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> list()
        {
            var email = User.FindFirst(ClaimTypes.Email).Value;
            var user = _userManager.FindByEmailAsync(email);

            var assetList = await _context.Assets.Where(a => a.UserId == user.Result.Id).Select(item =>
                    new Asset
                    {
                        Id = item.Id,
                        AssetName = item.AssetName,
                        AssetDescription = item.AssetDescription,
                        Amount = item.Amount
                    }
                        ).ToListAsync();
            return Ok(JsonConvert.SerializeObject(assetList));
        }

        // POST: "api/asset/details"
        // gets user's specific asset realted transaction history
        // parameters: takes asset id as param.
        // return: returns transaction history related to that asset
        [HttpPost]
        [Route("api/asset/details")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Details([FromBody] string id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            var assetDetailsList = await _context.Transactions.Where(t => t.AssetId == Convert.ToInt32(id)).ToListAsync();
            if (assetDetailsList == null)
            {
                return NotFound();
            }

            return Ok(JsonConvert.SerializeObject(assetDetailsList));
        }

        // POST: Asset/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("api/asset/create")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Create([Bind("AssetName,AssetDescription,Amount")][FromBody] Asset asset)
        {
            if (ModelState.IsValid)
            {
                var email = User.FindFirst(ClaimTypes.Email).Value;
                var user = _userManager.FindByEmailAsync(email);
                asset.UserId = user.Result.Id;

                _context.Add(asset);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }

        // POST: Asset/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("api/asset/edit")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Edit([Bind("Id,AssetName,AssetDescription,Amount")][FromBody] Asset asset)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var email = User.FindFirst(ClaimTypes.Email).Value;
                    var user = _userManager.FindByEmailAsync(email);
                    asset.UserId = user.Result.Id;
                    _context.Update(asset);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AssetExists(asset.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                // return RedirectToAction(nameof(Index));
            }
            return Ok();
        }

        // GET: Asset/Delete/5

        // POST: Asset/Delete/5
        [HttpPost]
        [Route("api/asset/delete")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Delete([FromBody]int id)
        {
            var asset = await _context.Assets.SingleOrDefaultAsync(m => m.Id == id);
            _context.Assets.Remove(asset);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private bool AssetExists(int id)
        {
            return _context.Assets.Any(e => e.Id == id);
        }

    }
}

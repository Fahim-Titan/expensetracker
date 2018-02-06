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
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;

namespace FinanceTracker.Controllers
{
    [EnableCors("CORSPolicy")]
    public class TransactionController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        // TransactionModel _tr;
        public TransactionController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: Transaction
        [HttpPost]
        [Route("api/transaction/list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Index([FromBody] ApplicationUser appUser)
        {
            var user = await _userManager.FindByEmailAsync(appUser.Email);
            if (user !=null)
            {
                var userTransactionList = await _context.Transactions.Where(t => t.UserId ==  user.Id).ToListAsync();
                if (userTransactionList == null)
                {
                    return NoContent();
                }
                return Ok(JsonConvert.SerializeObject(userTransactionList));
            }
            return Unauthorized();
                        
            // var applicationDbContext = _context.Transactions.Include(t => t.user);
            // return View(await applicationDbContext.ToListAsync());
        }

        // // GET: Transaction/Details/5
        // public async Task<IActionResult> Details(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var transaction = await _context.Transactions
        //         .Include(t => t.user)
        //         .SingleOrDefaultAsync(m => m.Id == id);
        //     if (transaction == null)
        //     {
        //         return NotFound();
        //     }

        //     return View(transaction);
        // }

        // GET: Transaction/Create
        // public IActionResult Create()
        // {
        //     ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id");
        //     return View();
        // }

        // POST: Transaction/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("api/transaction/create")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Create([FromBody] Transaction transaction)
        {
            if (ModelState.IsValid)
            {
                var email = User.FindFirst(ClaimTypes.Email).Value;
                var user = _userManager.FindByEmailAsync(email);

                transaction.UserId = user.Result.Id;
                _context.Add(transaction);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }

        // // GET: Transaction/Edit/5
        // public async Task<IActionResult> Edit(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var transaction = await _context.Transactions.SingleOrDefaultAsync(m => m.Id == id);
        //     if (transaction == null)
        //     {
        //         return NotFound();
        //     }
        //     ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id", transaction.UserId);
        //     return View(transaction);
        // }

        // POST: Transaction/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("api/transaction/edit/{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Edit(int id, [FromBody] Transaction transaction)
        {
            if (id != transaction.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(transaction);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TransactionExists(transaction.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok();
            }
            return BadRequest();
        }

        // // GET: Transaction/Delete/5
        // public async Task<IActionResult> Delete(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var transaction = await _context.Transactions
        //         .Include(t => t.user)
        //         .SingleOrDefaultAsync(m => m.Id == id);
        //     if (transaction == null)
        //     {
        //         return NotFound();
        //     }

        //     return View(transaction);
        // }

        // // POST: Transaction/Delete/5
        // [HttpPost, ActionName("Delete")]
        // [ValidateAntiForgeryToken]
        // public async Task<IActionResult> DeleteConfirmed(int id)
        // {
        //     var transaction = await _context.Transactions.SingleOrDefaultAsync(m => m.Id == id);
        //     _context.Transactions.Remove(transaction);
        //     await _context.SaveChangesAsync();
        //     return RedirectToAction(nameof(Index));
        // }

        private bool TransactionExists(int id)
        {
            return _context.Transactions.Any(e => e.Id == id);
        }
    }
}

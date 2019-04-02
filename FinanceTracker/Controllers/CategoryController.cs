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
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public CategoryController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: Category
        [HttpPost]
        [Route("api/category/list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Index([FromBody] ApplicationUser AppUser)
        {
            var user = await _userManager.FindByEmailAsync(AppUser.Email);
            if (user != null)
            {
                var categoryList = await _context.Categories.Where(c=> c.UserId == user.Email).ToListAsync();
                if (categoryList != null)
                {
                    return Ok(JsonConvert.SerializeObject(categoryList));    
                }
                return NoContent();
            }
            return Unauthorized();
        }

        // POST: Category/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("api/category/create")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([FromBody] Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Add(category);
                await _context.SaveChangesAsync();
                // return RedirectToAction(nameof(Index));
                return Ok(new {category});
            }
            // ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id", category.UserId);
            return BadRequest();
            // return Ok(new {category});
        }

        // GET: Category/Edit/5
        [HttpGet]
        [Route("api/category/edit/{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return Unauthorized();
            }
            var category = await _context.Categories.FirstOrDefaultAsync(m => m.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(new {category});
        }

        // POST: Category/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        // [ValidateAntiForgeryToken]
        [Route("api/category/edit/{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Edit(int id, [FromBody] Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(category);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CategoryExists(category.Id))
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

        // // GET: Category/Delete/5
        // public async Task<IActionResult> Delete(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var category = await _context.Categories
        //         .Include(c => c.user)
        //         .SingleOrDefaultAsync(m => m.Id == id);
        //     if (category == null)
        //     {
        //         return NotFound();
        //     }

        //     return View(category);
        // }

        // POST: Category/Delete/5
        [HttpPost, ActionName("Delete")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var category = await _context.Categories.SingleOrDefaultAsync(m => m.Id == id);
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}

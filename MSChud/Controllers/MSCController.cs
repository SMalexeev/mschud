using Microsoft.AspNetCore.Mvc;
using MSChud.Models;

namespace MSChud.Controllers
{
    public class MSCController : Controller
    {
        public IActionResult HUD()
        {

            return View();
        }
        public IActionResult Settings()
        {
            return View();
        }
    }
}

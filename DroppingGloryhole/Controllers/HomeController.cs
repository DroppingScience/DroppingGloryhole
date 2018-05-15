using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DroppingGloryhole.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Rules()
        {
            ViewBag.Message = "Rules page";

            return View();
        }

        public ActionResult Combat()
        {
            return View();
        }

        public ActionResult Odds()
        {
            return View();
        }
    }
}
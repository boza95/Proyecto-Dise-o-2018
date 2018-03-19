using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WRT.Models;

namespace WRT.Controllers
{
    public class HomeController : Controller
    { 
        // Se envia informacion a react post
        public JsonResult LlamarJson()
        {
            var output = ObtenerListaUsuarios();
            System.Diagnostics.Debug.WriteLine("FGHJJTY " + output.Count());
            return Json(output, JsonRequestBehavior.AllowGet);
        }

        private List<Usuario> ObtenerListaUsuarios()
        {
            List<Usuario> lUsuarios = new List<Usuario>(){
            new Usuario(){ Nombre = "Juan",  Apellido = "Glezz" },
            new Usuario(){ Nombre = "Pedro", Apellido = "Avila" },
            new Usuario(){ Nombre = "Pehdro Miguel", Apellido = "Pimienta Morales" },
            new Usuario(){ Nombre = "Juaan", Apellido = "M" },
            new Usuario(){ Nombre = "Luiggi", Apellido = "Mendoza" },
            new Usuario(){ Nombre = "Paul", Apellido="Vargas"},
            new Usuario(){ Nombre = "Alvaro", Apellido = "Montoro" }
        };
            return lUsuarios;
        }
        public JsonResult GetData(Usuario usuario)
        {
            System.Diagnostics.Debug.WriteLine(usuario.Nombre+" , "+usuario.Apellido);

            return Json(usuario, JsonRequestBehavior.AllowGet);
        }
    }
}
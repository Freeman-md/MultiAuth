using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class PublicController : ControllerBase {
    private readonly ILogger<PublicController> _logger;

    public PublicController(ILogger<PublicController> logger) {
        _logger = logger;
    }

    [HttpGet]
    public ActionResult Get() {
        return Ok( new { date = DateTime.UtcNow.ToString() } );
    }
}
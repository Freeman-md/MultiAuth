using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace api.Controllers;

[Authorize]
[RequiredScope("properties.read")]
[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{
    private readonly ILogger<HelloController> _logger;
    private readonly IHttpContextAccessor _contextAccessor;

    public HelloController(ILogger<HelloController> logger, IHttpContextAccessor contextAccessor)
    {
        _logger = logger;
        _contextAccessor = contextAccessor;
    }

    [HttpGet] 
    public IActionResult Get() {
        var userName = User.Identity?.Name ?? "Anonymous";
        return Ok(new { name = userName });
    }

}
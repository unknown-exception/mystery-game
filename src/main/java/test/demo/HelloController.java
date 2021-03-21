package test.demo;


import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
public class HelloController {
    /*
    @RequestMapping("/")
    public String Hello(){
        return "Hello!";
    }
*/

    @RequestMapping(value = "/hello", produces = "application/json")
    public Foo sayHello(@CookieValue(value = "username", defaultValue = "Atta") String username, @RequestParam(value = "name") String name){
        Foo foo = new Foo();
        foo.Age = 42;
        foo.Name = name;
        foo.UserName = username;
        return foo;
        //return "Hello " + name + ".";
    }
    @GetMapping("/change-username")
    public String setCookie(HttpServletResponse response) {
        // create a cookie
        Cookie cookie = new Cookie("username", "Jovan");

        //add cookie to response
        response.addCookie(cookie);
        return "Username is changed!";
    }
}



package test.demo;


import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.*;
import java.util.stream.IntStream;

@RestController
public class HelloController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/weatherforecast", produces = "application/json", method = RequestMethod.GET)
    public ArrayList<Forecast> WeatherForecast(){
        String[] arr = {"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot"};

        ArrayList<Forecast> f = new ArrayList<>();
        IntStream.range(0, arr.length - 1).forEach(i -> f.add(i, new Forecast( new Date(), 1, 1, arr[i] )));
        return f;
    }

    @RequestMapping(value = "/hello", produces = "application/json")
    public Foo sayHello(@CookieValue(value = "username", defaultValue = "Atta") String username, @RequestParam(value = "name") String name){
        Foo foo = new Foo();
        foo.Age = 42;
        foo.Name = name;
        foo.UserName = username;
        return foo;
    }
    @GetMapping("/change-username")
    public String setCookieUsername(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] requestCookies = request.getCookies();

        if(requestCookies != null) {
            // create a cookie
            Cookie cookie = new Cookie("username", "Jovan");

            //add cookie to response
            response.addCookie(cookie);
            return "Username is changed!";
        }
        return null;
    }
}



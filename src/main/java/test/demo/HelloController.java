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
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/isUserLogged", produces = "application/json", method = RequestMethod.GET)
    public Player isUserLogged(@CookieValue(value = "username", defaultValue = "") String username){
        Player p = new Player(100, 100, username, "", null);
        return p;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/setUsername", produces = "application/json", method = RequestMethod.GET)
    public Player setUsername(HttpServletRequest request, HttpServletResponse response, @RequestParam String name) {
        Cookie[] requestCookies = request.getCookies();
        {
            // create a cookie
            Cookie cookie = new Cookie("username", name);

            //add cookie to response
            response.addCookie(cookie);
            Player p = new Player(100, 100, name, "", null);

            Arena.Add(p);
            return p;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getOpponentsList", produces = "application/json", method = RequestMethod.GET)
    public ArrayList<String> GetOpponentsList(@RequestParam String name){
        return Arena.getAvailablePlayers(name);
    }

/*    @GetMapping("/change-username")
    public String setCookie(HttpServletResponse response) {
        // create a cookie
        Cookie cookie = new Cookie("username111", "Jovan");

        //add cookie to response
        response.addCookie(cookie);
        return "Username is changed!";
    }*/
}



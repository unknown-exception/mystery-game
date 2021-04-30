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


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/isUserLogged", produces = "application/json", method = RequestMethod.GET)
    public Player isUserLogged(@CookieValue(value = "username", defaultValue = "") String username){
        Player p = new Player(username);
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
            Player p = new Player(name);

            Arena.Add(p);
            return p;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getOpponentsList", produces = "application/json", method = RequestMethod.GET)
    public ArrayList<String> GetOpponentsList(@RequestParam String name){
        return Arena.getAvailablePlayers(name);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getAllCards", produces = "application/json", method = RequestMethod.GET)
    public ArrayList<Card> GetAllCards(){
        return GameManager.GetAllCards();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/isGotOpponent", produces = "application/json", method = RequestMethod.GET)
    public Player IsGotOpponent(@RequestParam String name){
        for (Battle battle : GameManager.Battles) {
            if (battle.player2.name.equals(name)){
                return battle.player1;
            }
        }
        return new Player("");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/startBattle", produces = "application/json", method = RequestMethod.GET)
    public Player startBattle(@RequestParam String name, @RequestParam String opponentName){
        Player p1 = Arena.Dequeue(opponentName);
        Player p2 = Arena.Dequeue(name);

        Battle b = new Battle(p1, p2);
        GameManager.Battles.add(b);
        return p1;
    }




/*

  @RequestMapping(value = "/hello", produces = "application/json")
    public Foo sayHello(@CookieValue(value = "username", defaultValue = "Atta") String username, @RequestParam(value = "name") String name){
        Foo foo = new Foo();
        foo.Age = 42;
        foo.Name = name;
        foo.UserName = username;
        return foo;
    }

  @GetMapping("/change-username")
    public String setCookie(HttpServletResponse response) {
        // create a cookie
        Cookie cookie = new Cookie("username111", "Jovan");

        //add cookie to response
        response.addCookie(cookie);
        return "Username is changed!";
    }*/
}



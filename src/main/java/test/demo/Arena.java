package test.demo;

import java.util.*;


public class Arena {
    private static Hashtable<String, Player> availablePlayers = new Hashtable<>();

    public static void Add(Player p){
        availablePlayers.put(p.name, p);
    }

    public static void Remove(Player p){
        availablePlayers.remove(p.name);
    }

    public static Player Dequeue(String name){
        Player p = availablePlayers.get(name);
        Remove(p);
        return p;
    }

    public static ArrayList<String> getAvailablePlayers(String playerName){
        ArrayList<String> ret = new ArrayList<>();
        for (String key: availablePlayers.keySet())
            if(!key.equals(playerName))
                ret.add(key);

        return  ret;
    }


}

package test.demo;

import java.util.Date;

public class Forecast {
    public Forecast(){}
    public  Forecast(Date date, double temperatureC, double temperatureF, String summary){
        this.date = date;
        this.temperatureC = temperatureC;
        this.temperatureF = temperatureF;
        this.summary = summary;
    }

    public Date date;
    public double temperatureC;
    public double temperatureF;
    public String summary;
}

package SDET;

public class Singleton {
    //private static instance of the class
    private static Singleton browser; //null
    private Singleton(){

    }
    public static Singleton getInstance(){
        if(browser==null){
            browser = new Singleton();
        }
        return browser;
    }
}

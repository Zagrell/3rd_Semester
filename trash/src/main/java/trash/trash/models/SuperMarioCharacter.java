package trash.trash.models;


public class SuperMarioCharacter {

    private String name;

    public SuperMarioCharacter(String name){
        this.name = name;
    }


    public String getName(){
        return name;
    }

    @Override
    public String toString() {
        return name;
    }
}

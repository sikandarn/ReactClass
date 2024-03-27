import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;

public class VolcanoAnalyzer {
    private List<Volcano> volcanos;

    public void loadVolcanoes(Optional<String> pathOpt) throws IOException, URISyntaxException {
        try{
            String path = pathOpt.orElse("volcano.json");
            URL url = this.getClass().getClassLoader().getResource(path);
            String jsonString = new String(Files.readAllBytes(Paths.get(url.toURI())));
            ObjectMapper objectMapper = new ObjectMapper();
            TypeFactory typeFactory = objectMapper.getTypeFactory();
            volcanos = objectMapper.readValue(jsonString, typeFactory.constructCollectionType(List.class, Volcano.class));
        } catch(Exception e){
            throw(e);
        }
    }

    public Integer numbVolcanoes(){
        return volcanos.size();
    }

    //add methods here to meet the requirements in README.md

    //The volcanoes that erupted in the 1980s.
    public List<Volcano> eruptedInEighties () {
        return volcanos.stream()
                .filter(x -> x.getYear() >= 1980)
                .filter(y -> y.getYear() < 1990)
                .toList();
    }

    //The volcanoes that had an eruption with a VEI of 6 or higher.
    public String [] highVEI () {
        String [] name =  volcanos.stream()
                            .filter(x -> x.getVEI() >= 6)
                            .map(v -> v.getName())
                            .toArray(String[]::new);
        return name;
    }

    //The volcano eruption with the highest number of recorded deaths.
    public Volcano mostDeadly()
    {
        return volcanos.stream()
                .filter(a -> !a.getDEATHS().isEmpty())
                .max(Comparator.comparingInt(y->Integer.parseInt(y.getDEATHS())))
                .orElse(null);

    }

    //The percentage of eruptions that caused tsunamis
    public double causedTsunami()
    {
        double totalVolcano = volcanos.size();
        double totalTsunami = volcanos.stream()
                                .filter(a->a.getTsu().equals("tsu")).count();
        return ( totalTsunami / totalVolcano ) * 100;
    }

    //Types of volcanoes
    public String[] volcanoTypes()
    {   
        String[] types = volcanos.stream()
                            .map(v->v.getType()).distinct()
                            .toArray(String[]::new);
        return types;
    }

}

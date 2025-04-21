package logisitic_model;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "https://joshua-menefee.github.io")
@RestController
public class AdoptionController {
    @GetMapping("/simulate")
    public List<Double> simulate(
            @RequestParam double M,
            @RequestParam double k,
            @RequestParam double B,
            @RequestParam double duration,
            @RequestParam double step) {

        LogisticModel model = new LogisticModel(M, k, B);
        double[] data = model.generateAdoptionData(0, duration, step);
        return Arrays.stream(data).boxed().collect(Collectors.toList());
    }
}

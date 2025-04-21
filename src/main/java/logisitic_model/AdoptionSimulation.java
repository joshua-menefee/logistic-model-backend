package logisitic_model;

import java.util.Arrays;

public class AdoptionSimulation {
    public static void main(String[] args) {
        double marketSaturation = 1000; // M
        double growthRate = 0.1; // k
        double initialValue = 10; // B

        LogisticModel model = new LogisticModel(marketSaturation, growthRate, initialValue);
        double[] adoptionData = model.generateAdoptionData(0, 52, 1);

        System.out.println(Arrays.toString(adoptionData));
    }
}

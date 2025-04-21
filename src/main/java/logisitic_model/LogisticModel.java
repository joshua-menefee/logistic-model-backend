package logisitic_model;

import java.util.Arrays;

public class LogisticModel {
    private final double M; // Market saturation
    private final double k; // Growth rate
    private final double B; // Initial value

    public LogisticModel(double M, double k, double B) {
        this.M = M;
        this.k = k;
        this.B = B;
    }

    public double getUsersAtTime(double t) {
        return M / (1 + ((M - B) / B) * Math.exp(-k * t));
    }

    public double[] generateAdoptionData(double start, double end, double step) {
        int size = (int) ((end - start) / step) + 1;
        double[] adoptionData = new double[size];
        for (int i = 0; i < size; i++) {
            double t = start + i * step;
            adoptionData[i] = getUsersAtTime(t);
        }
        return adoptionData;
    }
}

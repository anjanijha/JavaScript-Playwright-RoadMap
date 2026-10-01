package SDET;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class _39CountCharacterOccurrence {
//Character count using Java8
    public static void main(String[] args) {
        String input = "gainjavaknowledge";

        Map<String, Long> output = Arrays.stream(input.split("")).
                collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        System.out.println("Output : "+output);

    }
}

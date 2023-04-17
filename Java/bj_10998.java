package Java;

import java.util.Scanner;

public class bj_10998 {
    public static void main(String[] args) {
        int a,b;
        try (Scanner sc = new Scanner(System.in)) {
            a=sc.nextInt();
            b=sc.nextInt();
        }
        System.out.println(a*b);
    }
}

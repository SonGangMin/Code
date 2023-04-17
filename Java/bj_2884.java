package Java;

import java.util.Scanner;

public class bj_2884 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int h = sc.nextInt();
    int m = sc.nextInt();

    if (m >= 45) {
      int newm = m - 45;
      System.out.println(h + " " + newm);
    } else if (h >= 1 && m < 45) {
      int newh = h - 1;
      int newmm = m + 15;
      System.out.println(newh + " " + newmm);
    } else {
      System.out.println("23" + " " + (m + 15));
    }
  }
}

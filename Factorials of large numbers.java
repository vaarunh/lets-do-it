// { Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class Hacktober
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0)
        {
            int N = sc.nextInt();
            Solution ob = new Solution();
            ArrayList<Integer> ans = ob.factorial(N);
            for (Integer val: ans) 
                System.out.print(val); 
            System.out.println();
        }   
    }
}// } Driver Code Ends


//User function Template for Java

class Solution {
    static ArrayList<Integer> factorial(int N){
        //code here
        ArrayList<Integer> a=new ArrayList<>();
        a.add(1);
        int i,;
        for(i=2;i<=N;i++){
            mul(i,a);
        }
        //System.out.println(a);
    Collections.reverse(a);   
    return  a;  
    }
    static void mul(int x, ArrayList<Integer> l){
        int i, prod,carry=0;
        
        for(i=0;i<l.size();i++){
            prod=l.get(i) * x  +carry;
            l.set(i,prod%10);
            carry=prod/10;
        }
        while (carry!=0)
        {
            l.add(carry % 10);
            carry = carry / 10;
        }
        
    }
}

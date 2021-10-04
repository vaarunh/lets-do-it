// { Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

public class GFG {
    public static void main (String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while(T>0)
        {
            int n = sc.nextInt();
            int arr[] = new int[n];
            for(int i=0;i<n;i++)
            {
                arr[i]=sc.nextInt();
            }
             
            int key =sc.nextInt();
            Solution g = new Solution();
            System.out.println(g.binarysearch(arr,n,key));
            T--;
        }
    }
}

// } Driver Code Ends


//User function Template for Java

class Solution {
    
    static int bs(int a[],int l,int h,int k){
       if(l<=h){
        int m=(l+h)/2;
        if(a[m]==k)
        return m;
        else if(a[m]<k)
            return bs(a,m+1,h,k);
        else
            return bs(a,l,m-1,k);
        }else
            return -1;
   }
    
    
    int binarysearch(int arr[], int n, int k){
        // code here
        int ans=bs(arr,0,n-1,k);
        return ans;
    }
}
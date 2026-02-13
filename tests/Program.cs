// Program.cs - Test C#
using System;

namespace ViraThemeTest
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int number = 123;
            string text = "C# Test";

            Console.WriteLine($"Number: {number}");
            ProcessData(text);
        }

        private static void ProcessData(string input)
        {
            var result = input.ToUpper();
            // To jest komentarz
        }
    }
}
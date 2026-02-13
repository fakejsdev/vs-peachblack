# main.py - Test Python
import os

class DataProcessor:
    def __init__(self, data):
        self.data = data  # self powinien byc szary/italic
        self.count = 0

    def process(self):
        """Docstring test"""
        items = ["apple", "banana", "cherry"]
        
        for item in items:
            print(f"Processing {item}")
            self.count += 1

def main():
    processor = DataProcessor("input.txt")
    processor.process()

if __name__ == "__main__":
    main()
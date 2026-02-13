// main.rs - Test Rust
fn main() {
    let name: &str = "Rustacean";
    let count: i32 = 100;

    println!("Hello, {}!", name);

    match count {
        100 => println!("Full score!"),
        _ => println!("Keep trying"),
    }
}

fn calculate(a: i32, b: i32) -> i32 {
    return a + b;
}
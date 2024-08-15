def fibonacci(n, values = [0, 1, 1]):
    if n < 2:
        return n
    
    return fibonacci(n - 1) + fibonacci(n - 2)

print("Expecting: 0")
print("=>", fibonacci(0))

print("")

print("Expecting: 1")
print("=>", fibonacci(2))

print("")

print("Expecting: 55")
print("=>", fibonacci(10))

print("")

print("Expecting: 6765")
print("=>", fibonacci(20))
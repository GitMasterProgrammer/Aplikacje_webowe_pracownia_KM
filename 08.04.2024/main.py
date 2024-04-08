def blocks(text):
    if text == '': return 0
    last = text[0]
    counter = 1
    for char in text:
        if(char != last): counter += 1
        last = char
    return counter

def decimalBlocks(decimal):
    return blocks(decimalToBinary(decimal))

def decimalToBinary(n):
    return str(bin(n).replace("0b", ""))

def binaryToDecimal(n):
    return int(n,2)

def zad2_5(n):
    return decimalToBinary(binaryToDecimal(n) ^ (int(binaryToDecimal(n) / 2)))

with open("Dane_2305/bin_przyklad.txt") as file:
    lines = file.read().split("\n")
    final = 0
    max_ = 0
    max_str = ""
    for line in lines:
        if(blocks(line) <= 2 and blocks(line) != 0): final +=1
        if(int(blocks(line)) > max_):
            max_ = blocks(line)
            max_str = line
        print(zad2_5(line))
    print(final, max_str)


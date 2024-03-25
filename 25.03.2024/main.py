WAKACJEEE = "wakacje"

def calculateW(word):
    c=0
    for i in word:
        if(i.lower() == "w"):
            c+=1
    return c

def calculateK(word):
    c=0
    for i in word:
        if(i.lower() == "k"):
            c+=1
    return c

def ifWKword(word):
    return calculateK(word) == calculateW(word)

def countWakacje(word):
    num_w = word.count('w')
    num_a = int(word.count('a') / 2)
    num_k = word.count('k')
    num_c = word.count('c')
    num_j = word.count('j')
    num_e = word.count('e')
    return min([num_w, num_a, num_k, num_c, num_j, num_e])

def wakacyjneSlowo(word):
    step = 0
    delt = 0 
    for i in range(0, len(word)):
        if word[i] == WAKACJEEE[step]:
            step += 1
            if(step == len(WAKACJEEE)): step = 0

        else:
            delt += 1
    
    return delt + step
    
    
with open('Dane_2305/przyklad.txt', 'r') as file:
    lines = file.read().splitlines()
    with open('wyniki4_1.txt', 'a') as file_output:
        for i in lines:
            if ifWKword(i): file_output.write(i + "\n")

    with open('wyniki4_2.txt', 'a') as file_output_2:
        for i in lines:
            file_output_2.write(str(countWakacje(i)) + " ")

    with open('wyniki4_3.txt', 'a') as file_output_3:
        for i in lines:
            file_output_3.write(str(wakacyjneSlowo(i)) + " ")


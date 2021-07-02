# Input: AABCAABAAAAB, 3 Output AB CA BA
# AAB CAA BAA AAB
# AB CA BA AB
# AB CA BA

inputStr = "AABCAABAAAAB"

outPut1 = []
outPut2 = []

for i in range(0, len(inputStr), 3):
    outPut1.append(inputStr[i:i+3])
    outPut2.append(inputStr[i:i+2])

    
print(outPut1)
print(outPut2)
print(outPut2[0: len(outPut2)-1])
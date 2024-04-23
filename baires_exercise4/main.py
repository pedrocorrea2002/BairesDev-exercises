'''
#! FORMATAR UM ARQUIVO DE DADOS .csv EM UM ARQUIVO .json
'''

import pandas as pd
import json
import os

# Convert CSV data from '/dataset/dataset.csv' file to JSON format and write to file
CSV_file = os.path.join("dataset/dataset.csv")
CSV_df = pd.read_csv(CSV_file, delimiter=",")

submission1 = CSV_df.transpose()

submission = [
    # Write your JSON formatted data here
]

for item in submission1:
    brand = submission1.get(item)[0]
    model1 = submission1.get(item)[1]
    model2 = submission1.get(item)[2]

    submission.append({"brand":brand,"model1":model1,"model2":model2})

print(submission)

with open("submission.json","w") as file:
    json.dump(submission, file, indent = 4)

import xlrd
import sys
#book=xlrd.open_workbook(r"Desktop/new_fyp_dataset_final.xlsx")
wb = xlrd.open_workbook(r"C:\Users\Ali\Desktop\new_fyp_dataset_final.xlsx")
sheet = wb.sheet_by_index(0)
#print(sheet.ncols)

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


# product_name = input('Enter product name')
review = []
flag = 0
print ('arguments:', len(sys.argv), 'arguments.');
print ('Argument list:', str(sys.argv));
product_name = sys.argv[1]
print ('Argument :', product_name);
for row in range(sheet.nrows):  # Iterate over every rows of the file
    if product_name == sheet.cell_value(row, 3):
        review.append(sheet.cell_value(row, 6))
        
lenth = len(review)

for i in review:
    if review != '':
        flag = 1
        
if flag == 1:

    def sentiment_scores(review):
 
    # Create a SentimentIntensityAnalyzer object.
        sid_obj = SentimentIntensityAnalyzer()
 
    # polarity_scores method of SentimentIntensityAnalyzer
    # object gives a sentiment dictionary.
    # which contains pos, neg, neu, and compound scores.
        sentiment_dict = sid_obj.polarity_scores(review)
     
        print("Overall sentiment dictionary is : ", sentiment_dict)
        print("sentence was rated as ", sentiment_dict['neg']*100, "% Negative")
        print("sentence was rated as ", sentiment_dict['neu']*100, "% Neutral")
        print("sentence was rated as ", sentiment_dict['pos']*100, "% Positive")
 
        print("Sentence Overall Rated As", end = " ")
 
    # decide sentiment as positive, negative and neutral
        if sentiment_dict['compound'] >= 0.05 :
            print("Positive")
 
        elif sentiment_dict['compound'] <= - 0.05 :
            print("Negative")
 
        else :
            print("Neutral")
            
if flag == 1:
    if __name__ == "__main__" :
        sentiment_scores(review)
else:
    print("there is no review for particuler prodcut")
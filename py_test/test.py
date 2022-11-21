# def ticket (x,y):
#     sum =  1000*x + 500*y
#     return sum

# # a = input('大人の人数を教えてください')
# # b = input('子供の人数を教えてください')
# # a = int(a)
# # b = int(b)
# # r = ticket(a,b)
# # r = str(r)
# # print("合計料金は"+ r +"円です")

# z = ["kagawa","okayama","saga"]
# print(z[1])

# # 条件分岐
# if 5>3:
#     print("OK")

# a = 20

# if a < 1000:
#     print(a)


# for w in z:
#     print(w)

# print(range(20,25))

# for num in range(20,25):
#     print(num)

#0～100までの数字を出力
#ただし3の倍数はFizz
#5の倍数はBuzz
#両方の倍数の時はFizzBuzz
#と出力せよ

# for num in range(0,100):
#     print(num)

# for num in range(1,101):
#     if num % 15 == 0:
#         print("FizzBuzz")
#     elif num % 5 == 0:
#         print("Buzz")
#     elif num % 3 == 0:
#         print("Fizz")
#     else:
#         print(num)

#じゃんけんゲーム
#ターミナル画面で自分の手が入力できる
#コンピュータの手がランダムに出る
#出力結果は「勝ち」「負け」「あいこ」


# import random
# a = int(input("(グー:1,チョキ:2,パー:3)あなたが出す手は？:"))
# b = random.randint(1,3)

# def jyanken(a,b):
#     if a == b:
#         print("あいこです")
#     elif a == 1 and b == 2:
#         print("相手はチョキを出しました。あなたの勝ちです")
#     elif a == 1 and b == 3:
#         print("相手はパーを出しました。あなたの負けです")
#     elif a == 2 and b == 1:
#         print("相手はグーを出しました。あなたの負けです")
#     elif a == 2 and b == 3:
#         print("相手はパーを出しました。あなたの勝ちです")
#     elif a == 3 and b == 1:
#         print("相手はグーを出しました。あなたの勝ちです")
#     elif a == 3 and b == 2:
#         print("相手はチョキを出しました。あなたの負けです")
#     else:
#         print("1~3の数字を入力してください。")
    

# 相手の出す手をランダムに発生
# jyanken(a,b)

#リストの中身をランダムに出力してくれるモジュールをimport
import random
#ターミナル画面で自分の手を入力
my_hand = input("グー,チョキ,パーのどれかを入力してください:")
com_hand = random.choice(["グー","チョキ","パー"])
print(com_hand)
#結果
kekka = ["勝った！","負けた・・","あいこー"]
result = ""
#条件を書く
#あいこの時
if my_hand == com_hand:
    #resultの箱に「あいこ」を入れる
    result = [2]
else:
    #自分の手が「グー」、
    if my_hand == "グー":
    #com_handの手がチョキ   
        if com_hand == "チョキ":
            #resultの箱にkekkaの配列から「勝った！」を入れる
            result = kekka[0]
        else:
            #そうでなければresultの箱にkekkaの配列から「負けた・・」を入れる
            result = kekka[1]
    #自分の手が「チョキ」、
    elif my_hand == "チョキ":
        #com_handの手がパー
        if com_hand == "パー":
            #resultの箱にkekkaの配列から「勝った！」を入れる
            result = kekka[0]
        else:
            #そうでなければresultの箱にkekkaの配列から「負けた・・」を入れる
            result = kekka[1]
    elif my_hand =="パー":
        if com_hand == "グー":
            #resultの箱にkekkaの配列から「勝った！」を入れる
            result = kekka[0]
        else:
            #そうでなければresultの箱にkekkaの配列から「負けた・・」を入れる
            result = kekka[1]

print("あなたの手は"+my_hand)
print("相手の手は"+com_hand)
print("あなたは"+result)

# 参上！！  


     









    
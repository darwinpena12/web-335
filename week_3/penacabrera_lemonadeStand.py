"""
Author: Darwin Pena Cabrera
Date: 06/28/2026
File Name: penacabrera_lemonadeStand.py
Description: Simple program that calculates the cost and profit of a lemonade stand
"""

# Function to calculate the cost of a lemonade
def calculate_cost(lemons_cost, sugar_cost):
  # adding the cost of sugar and lemons
  total_cost = lemons_cost + sugar_cost
  return total_cost

# function to calculate the profit from selling a lemonade
def calculate_profit(lemons_cost, sugar_cost, selling_price):
  total_profit = selling_price - lemons_cost - sugar_cost
  return total_profit

# variables to test functions
lemons_cost = 2
sugar_cost = 1
selling_price = 5

# Calling the calculate_cost function and storing the result
total_cost = calculate_cost(lemons_cost, sugar_cost)

# Calling the calculate_profit function and storing the result
total_profit = calculate_profit(lemons_cost, sugar_cost, selling_price)

# String to show the total cost calculation
cost_output = str(lemons_cost) + " + " + str(sugar_cost) + " = " + str(total_cost)

# String to show the total profit calculation
profit_output = str(selling_price) + " - " + str(total_cost) + " = " + str(total_profit)

# Print the total cost calculation
print("lemons cost + sugar cost = total cost")
print(cost_output)

#print the total profit calculation
print("selling price - total cost = profit")
print(profit_output)

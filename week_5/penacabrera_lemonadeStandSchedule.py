"""
Author: Darwin Pena Cabrera
Date: 07/24/2026
File Name: penacabrera_lemonadeStandSchedule.py 
Description: Simple program that shows the schedule and task of a lemonade stand
"""
# List of lemonade stand task
tasks = [
  "Buy the ingredients for the lemonade in a local fruit market (Sugar, lemons)",
  "Buy the supplies to prepare the lemonade (Cups, straws)",
  "Set up the lemonade stand",
  "Prepare the fresh lemonades in front of the customer when the buy them",
  "Clean the stand, count the profit and go back home"
]

# Display all tasks
print("Lemonade stand tasks: \n")

for task in tasks:
  print(task)

# List of days of the week
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

# Variable to track the weekly tasks
i = 0

# Display the schedule
print("\nWeekly Schedule:\n")

for day in days:
  # Display message for Saturday and Sunday indicating that those days are for resting
  if day == "Saturday" or day == "Sunday":
    print(day + ": it is a day off and you should rest")
  else:
    print(day + ": " + tasks[i])
    i = i + 1
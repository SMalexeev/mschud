using Microsoft.AspNetCore.SignalR;
using MSChud.Models;

namespace MSChud.Hubs
{
    public class ControllerHub : Hub
    {
        public async Task SetDayOfWeek(string day)
        {
            PlayerNeeds.DayOfWeek = day;
            await Clients.All.SendAsync("SetDayOfWeek", PlayerNeeds.DayOfWeek);
        }
        public async Task SetThirst(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Thirst = value;
            await Clients.All.SendAsync("SetThirst", PlayerNeeds.Thirst);
        }
        public async Task SetHunger(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Hunger = value;
            await Clients.All.SendAsync("SetHunger", PlayerNeeds.Hunger);
        }
        public async Task SetStress(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Stress = value;
            await Clients.All.SendAsync("SetStress", PlayerNeeds.Stress);
        }
        public async Task SetUrine(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Urine = value;
            await Clients.All.SendAsync("SetUrine", PlayerNeeds.Urine);
        }
        public async Task SetFatigue(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Fatigue = value;
            await Clients.All.SendAsync("SetFatigue", PlayerNeeds.Fatigue);
        }
        public async Task SetDirtiness(int value)
        {
            if (value >= 0 && value <= 100)
                PlayerNeeds.Dirtiness = value;
            await Clients.All.SendAsync("SetDirtiness", PlayerNeeds.Dirtiness);
        }
        public async Task SetMoney(int value)
        {
            if (value >= 0)
                PlayerNeeds.Money = value;
            await Clients.All.SendAsync("SetMoney", PlayerNeeds.Money);
        }
        public async Task SetTask(string value)
        {
            if (String.IsNullOrEmpty(value))
            {
                PlayerNeeds.Task = value;
            }
            else
            {
                PlayerNeeds.Task = $"\"{value.Trim()}\"";
            }
            await Clients.All.SendAsync("SetTask", PlayerNeeds.Task);
        }
    }
}

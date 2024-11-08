# HourlyPay - Show your hour/price

![Preview](https://github.com/tsalesproductions/hourlypay-vscode/blob/master/timer.png)
![Change your settings](https://github.com/tsalesproductions/hourlypay-vscode/blob/master/oneditor.png)

This extension displays a stopwatch with the activity time and your hourly rate in the status bar.  
Set your hourly rate.  
Start, stop, and reset the stopwatch.

## How to Use

1. Install the extension in Visual Studio Code.
2. Change the settings:
    * -> Preferences: Open User Settings.
    * -> Extensions
    * -> HourlyPay - Show your hour/price
    * -> `Currency`: Change your default/preferred currency by clicking "Edit in settings.json."
    * -> `Hourly Rate`: Set your price per hour.
    * -> Note: You can also configure this in the `settings.json` file of VSCode. Just add these two lines at the end of the file:
    ```JSON
    "hourlyPay.hourlyRate": 114.13,
    "hourlyPay.currency": "R$"
    ```
3. Use these commands to get started: `CTRL + E` (Windows) or `CMD + E` (MacOS), then type:
    ```
    Stopwatch: Start // To start the stopwatch
    Stopwatch: Stop // To stop the stopwatch
    Stopwatch: Reset // To reset the stopwatch
    ```

## Release Notes
--

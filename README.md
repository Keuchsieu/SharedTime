# SharedTime
VIsually shows time zone difference

## Visual Format

|Time Zones|Current Time|1h later|2h later|...|
|--|--|--|--|--|
|local|16:00 \|**16:38**|17:00|18:00|...|
|Beijing|7:00(tmr)\|**7:38**|8:00(tmr)|9:00(tmr)|...|
|London|0:00am(tmr)\|**0:38am**|1:00am(tmr)|2:00am(tmr)|...|

## Notes
1. Current Time is displayed
2. Future Time slots are displayed and aligned
3. 12/24 hour display can be switched
4. Adding and deleting time zones should be available
5. Standard time and Daylight Saving switch
6. Color codings
7. more to think about

## expected inputs
1. target location, if no inputs, use local time zone

## expected outputs
1. City/TimeZone name followed by a line of time slots
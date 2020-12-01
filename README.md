# SeatingChart
Javascript array processing to determine all possible seating arrangments when some seats are already occupied.

The problem is simple:  there is a set number of seats in a room.  We want to determine how many ways people can 
be seated next to each other when some seats are already occupied.  The logic assumes two columns of seats with
two seats per row.

Test Cases: we pass an array into the solution that is interpreted as:  the first element indicates the total
            number of seats, with all other numbers in the array indicating occupied seats.
            
            Input Array           Available Seat Pairings
            [6,4] :              [1,2],[1,3],[3,5],[5,6]
            [8,1,8] :            [2,4],[3,4],[3,5],[4,6],[5,6],[5,7]
            [24,1,6,8,15,19]     [2,4],[3,4],[3,5],[5,7],[7,9],[9,10],[9,11],[10,12],[11,12],[11,13],[12,14],[13,14],[14,16],[16,18],[17,18],[18,20],[20,22],[21,22],[21,23],[22,24],[23,24]
            [24,1,2,23,24].      [3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17],[17,19],[19,21],[4,6],[6,8],[8,10],[10,12],[12,14],[14,16],[16,18],[18,20],[20,22]
            [10,3,5,8].          [1,2],[2,4],[4,6],[7,9],[9,10]
            
            

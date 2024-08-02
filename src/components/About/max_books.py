def max_books_per_store(num_stores, stores_data):
    results = []
    for store in stores_data:
        B, P = store[0]
        book_costs = sorted(store[1])
        total_cost = 0
        num_books = 0
        
        for cost in book_costs:
            if total_cost + cost <= P:
                total_cost += cost
                num_books += 1
            else:
                break
        
        results.append(num_books)
    
    return results

# Reading input
T = int(input())
stores_data = []

for _ in range(T):
    B, P = map(int, input().split())
    book_costs = list(map(int, input().split()))
    stores_data.append(((B, P), book_costs))

# Calculating results
results = max_books_per_store(T, stores_data)

# Printing results
for result in results:
    print(result)

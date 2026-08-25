function handle(errorMe: string): never {
    throw new Error(errorMe)
}

handle("Error...");
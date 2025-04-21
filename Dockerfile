# Use a base image with Java 17 or 21 installed
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the Maven wrapper and project files
COPY . .

# Build the Spring Boot app using the Maven wrapper
RUN ./mvnw clean install -DskipTests

# Use the generated JAR file
CMD ["java", "-jar", "target/Logistic_Model-0.0.1-SNAPSHOT.jar"]

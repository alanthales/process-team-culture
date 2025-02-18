import { Worker } from "worker_threads";

export const todoConsumer = {
    async handle(message) {
        console.log("received: ", message.content.toString());

        const worker = new Worker("./src/heavyprocess.js", { workerData: message.content });

        worker.on("message", (status) => {
            console.log("status: ", status);
        });

        worker.on("error", (err) => {
            console.error(err);
        });
    }
}
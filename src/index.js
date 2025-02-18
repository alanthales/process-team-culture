import { RabbitWrapper } from "./mq/rabbit.js";
import { todoConsumer } from "./consumer.js";

const QUEUE = "todo_queue";

const channel = await RabbitWrapper.createChannel();

channel.assertQueue(QUEUE, {
    durable: false
});

console.log("listen queue: ", QUEUE);
channel.consume(QUEUE, todoConsumer.handle, { noAck: true });

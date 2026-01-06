import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Loi khi goi getAllTasks", error);
    res.status(500).json({ message: "Loi He Thong" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Loi khi goi createTask", error);
    res.status(500).json({ message: "Loi He Thong" });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { title, status, conpletedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status, conpletedAt },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Khong tim thay nhiem vu" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Loi khi goi updateTask", error);
    res.status(500).json({ message: "Loi He Thong" });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Khong tim thay nhiem vu" });
    }

    res.status(200).json({ deleteTask });
  } catch {
    console.error("Loi khi goi deleteTask", error);
    res.status(500).json({ message: "Loi server khi xoa nhiem vu" });
  }
};

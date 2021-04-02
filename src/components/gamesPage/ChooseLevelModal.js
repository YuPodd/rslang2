import { Modal, Button } from "antd";
import { useState } from "react";
import ChooseLevel from "./ChooseLevel";
import SprintGame from "./games/SprintGame";

export default function ChooseLevelModal() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Выберите уровень игры"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <ChooseLevel />
    </Modal>
  );
}

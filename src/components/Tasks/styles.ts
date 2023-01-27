import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    paddingHorizontal: 12,
    marginTop: -27,
  },
  taskDescription: {
    flex: 1,
    height: 52,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#262626",
    color: "#F2F2F2",
  },

  btnAdd: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
  containerTasks: {
    paddingHorizontal: 12,
  },
  headerTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    borderStyle: "solid",
  },
  statusTasks: {
    flexDirection: "row",
  },

  titleStatusTasks: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  count: {
    height: 19,
    width: 25,
    borderRadius: 999,
    backgroundColor: "#333333",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

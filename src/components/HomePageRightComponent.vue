<template>
  <div class="right">
    <el-table :data="users" height="100%">
      <el-table-column label="id" prop="id" width="50px" sortable />
      <el-table-column label="Username" prop="username" sortable />
      <el-table-column label="Time" prop="time" sortable />
      <el-table-column align="right" width="200px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button class="edit-button" size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
interface User {
  username: string,
  time: string,
}

const users: User[] = [
  {
    id: 1,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 2,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 3,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 4,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 5,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 6,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 7,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 8,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 9,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 10,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 11,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 12,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 13,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 14,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 15,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 16,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 17,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 18,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 19,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 20,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 21,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 22,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 23,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 24,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 25,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 26,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 27,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 28,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 29,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 30,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 31,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 32,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 33,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 34,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 35,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 36,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 37,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 38,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 39,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 40,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 41,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 42,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 43,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 44,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 45,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 46,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 47,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 48,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 49,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 50,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 51,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 52,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 53,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 54,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 55,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 56,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 57,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 58,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 59,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 60,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 61,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 62,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 63,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 64,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 65,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 66,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 67,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 68,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 69,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 70,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 71,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 72,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 73,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 74,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 75,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 76,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 77,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 78,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 79,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 80,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 81,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 82,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 83,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 84,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 85,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 86,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 87,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 88,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 89,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 90,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 91,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 92,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 93,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 94,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 95,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 96,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 97,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 98,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 99,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 100,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 101,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 102,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 103,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 104,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 105,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 106,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 107,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 108,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 109,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 110,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 111,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 112,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 113,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 114,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 115,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 116,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 117,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 118,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 119,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 120,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 121,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 122,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 123,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 124,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 125,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 126,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 127,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 128,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 129,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 130,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 131,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 132,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 133,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 134,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 135,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 136,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 137,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 138,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 139,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 140,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 141,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 142,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 143,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 144,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 145,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 146,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 147,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 148,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 149,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 150,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 151,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 152,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 153,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 154,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 155,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 156,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 157,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 158,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 159,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 160,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 161,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 162,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 163,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 164,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 165,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 166,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 167,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 168,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 169,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 170,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 171,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 172,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 173,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 174,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 175,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 176,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 177,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 178,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 179,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 180,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 181,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 182,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 183,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 184,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 185,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 186,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 187,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 188,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 189,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 190,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 191,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 192,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 193,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 194,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 195,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 196,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 197,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 198,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 199,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 200,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 201,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 202,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 203,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 204,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 205,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 206,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 207,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 208,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 209,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 210,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 211,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 212,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 213,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 214,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 215,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 216,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 217,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 218,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 219,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 220,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 221,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 222,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 223,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 224,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 225,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 226,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 227,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 228,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 229,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 230,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 231,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 232,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 233,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 234,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 235,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 236,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 237,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 238,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 239,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 240,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 241,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 242,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 243,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 244,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 245,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 246,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 247,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 248,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 249,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 250,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 251,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 252,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 253,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 254,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 255,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 256,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 257,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 258,
    username: "79781029092",
    time: "2ч 3м"
  },
  {
    id: 259,
    username: "79781029092",
    time: "2ч 3м"
  },
]
</script>

<style scoped>

.right {
  width: 60vh;
  padding-left: 35px;
}

.el-button {
  width: 80px;
}

.edit-button {
  background-color: var(--gray);
}
</style>

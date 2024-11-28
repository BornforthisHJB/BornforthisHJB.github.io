---
title: 01-数组练习
date: 2024-11-20 17:49:13
icon: java
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 数组的最大值和最小值

**描述**: 编写一个 Java 方法，接收一个整数数组，返回数组中的最大值和最小值。

**输入示例**: `int[] nums = {3, 5, 1, 9, 2};`

**输出示例**: `Max: 9, Min: 1`

**方法签名**:

```java
public static int[] findMinAndMax(int[] nums);
```

**答案：**

::: code-tabs

@tab Code1

```java
public class ArrayProblems {
    public static void findMaxAndMin(int[] nums) {
        // 初始化最大值和最小值为数组第一个元素
        int max = nums[0];
        int min = nums[0];
        
        // 遍历数组，逐步更新最大值和最小值
        for (int num : nums) {
            if (num > max) {  // 如果当前元素比当前最大值大，更新最大值
                max = num;
            }
            if (num < min) {  // 如果当前元素比当前最小值小，更新最小值
                min = num;
            }
        }
        // 打印结果
        System.out.println("Max: " + max + ", Min: " + min);
    }
    
    public static void main(String[] args) {
        // 测试数组
        int[] nums = {3, 5, 1, 9, 2};
        findMaxAndMin(nums);  // 调用方法
    }
}
```

@tab Code2

```java
public static int[] findMinAndMax(int[] nums) {
    // 初始化最大值和最小值为数组的第一个元素
    int max = nums[0];
    int min = nums[0];

    // 遍历数组
    for (int num : nums) {
        // 如果当前值大于最大值，更新最大值
        if (num > max) {
            max = num;
        }
        // 如果当前值小于最小值，更新最小值
        if (num < min) {
            min = num;
        }
    }
    // 返回最大值和最小值
    return new int[]{min, max};
}
```

@tab Code3

```java
public class ArraySolutions {
    public static int[] findMinAndMax(int[] nums) {
        int min = nums[0]; // 初始化最小值为第一个元素
        int max = nums[0]; // 初始化最大值为第一个元素
        for (int num : nums) { // 遍历数组
            if (num < min) min = num; // 更新最小值
            if (num > max) max = num; // 更新最大值
        }
        return new int[]{min, max}; // 返回包含最小值和最大值的数组
    }

    public static void main(String[] args) {
        int[] nums = {3, 5, 1, 9, 2};
        int[] result = findMinAndMax(nums);
        System.out.println("Min: " + result[0] + ", Max: " + result[1]);
    }
}
```

:::



## 2. 数组的元素之和

**描述**: 编写一个 Java 方法，计算并返回一个整数数组中所有元素的总和。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `Sum = 15`

**方法签名**:

```java
public static int calculateSum(int[] nums);
```

**答案：**

```java
public class ArraySum {
    public static void calculateSum(int[] nums) {
        // 初始化总和为0
        int sum = 0;
        
        // 遍历数组并累加每个元素的值
        for (int num : nums) {
            sum += num;
        }
        
        // 打印数组的总和
        System.out.println("Sum: " + sum);
    }
    
    public static void main(String[] args) {
        // 测试数组
        int[] nums = {1, 2, 3, 4, 5};
        calculateSum(nums);  // 调用方法
    }
}
```



## 3. 反转数组

**描述**: 编写一个 Java 方法，将给定的整数数组反转。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `Reversed = {5, 4, 3, 2, 1}`

**方法签名**:

```java
public static int[] reverseArray(int[] nums);
```

**答案：**

```java
public static int[] reverseArray(int[] nums) {
    int start = 0, end = nums.length - 1; // 定义双指针
    while (start < end) {
        // 交换两个指针的值
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums; // 返回反转后的数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    int[] reversed = reverseArray(nums);
    System.out.println("Reversed: " + Arrays.toString(reversed));
}
```







## 4. 查找目标元素的索引

**描述**: 编写一个 Java 方法，接收一个整数数组和一个目标值，返回目标值的索引，如果不存在则返回 -1。

**输入示例**: `int[] nums = {1, 3, 5, 7}; int target = 5;`

**输出示例**: `Index = 2`

**方法签名**:

```java
public static int findIndex(int[] nums, int target);
```

**答案：**

```java
public static int findIndex(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) { // 遍历数组
        if (nums[i] == target) return i; // 找到目标值时返回索引
    }
    return -1; // 如果目标值不存在，返回 -1
}

public static void main(String[] args) {
    int[] nums = {1, 3, 5, 7};
    int target = 5;
    System.out.println("Index: " + findIndex(nums, target));
}
```





## 5. 去除数组中的重复值

**描述**: 编写一个 Java 方法，删除数组中的重复值，返回新的数组。

**输入示例**: `int[] nums = {1, 2, 2, 3, 4, 4, 5};`

**输出示例**: `{1, 2, 3, 4, 5}`

**方法签名**:

```java
public static int[] removeDuplicates(int[] nums);
```

**答案：**

```java
public static int[] removeDuplicates(int[] nums) {
    Set<Integer> set = new LinkedHashSet<>(); // 使用有序集合去重
    for (int num : nums) {
        set.add(num); // 自动去重
    }
    return set.stream().mapToInt(Integer::intValue).toArray(); // 转换为数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 2, 3, 4, 4, 5};
    System.out.println("Unique: " + Arrays.toString(removeDuplicates(nums)));
}
```





## 6. 数组的元素平方

**描述**: 编写一个 Java 方法，返回一个数组，其中每个元素是原数组对应元素的平方值。

**输入示例**: `int[] nums = {1, 2, 3, 4};`

**输出示例**: `{1, 4, 9, 16}`

**方法签名**:

```java
public static int[] squareArray(int[] nums);
```

**答案：**

```java
public static int[] squareArray(int[] nums) {
    int[] squared = new int[nums.length]; // 创建结果数组
    for (int i = 0; i < nums.length; i++) {
        squared[i] = nums[i] * nums[i]; // 计算平方值
    }
    return squared; // 返回结果数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4};
    System.out.println("Squared: " + Arrays.toString(squareArray(nums)));
}
```





## 7. 两个数组的交集

**描述**: 编写一个 Java 方法，接收两个数组并返回它们的交集，结果不包含重复值。

**输入示例**: `int[] nums1 = {1, 2, 2, 3}; int[] nums2 = {2, 2, 3, 4};`

**输出示例**: `{2, 3}`

**方法签名**:

```java
public static int[] findIntersection(int[] nums1, int[] nums2);
```

**答案：**

```java
public static int[] findIntersection(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>();
    Set<Integer> intersection = new HashSet<>();
    for (int num : nums1) set1.add(num); // 将第一个数组加入集合
    for (int num : nums2) { // 遍历第二个数组
        if (set1.contains(num)) intersection.add(num); // 取交集
    }
    return intersection.stream().mapToInt(Integer::intValue).toArray(); // 转换为数组
}

public static void main(String[] args) {
    int[] nums1 = {1, 2, 2, 3};
    int[] nums2 = {2, 2, 3, 4};
    System.out.println("Intersection: " + Arrays.toString(findIntersection(nums1, nums2)));
}
```







## 8. 数组的左旋

**描述**: 编写一个 Java 方法，将数组中的元素向左旋转 k 个位置。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5}; int k = 2;`

**输出示例**: `{3, 4, 5, 1, 2}`

**方法签名**:

```java
public static int[] leftRotateArray(int[] nums, int k);
```

**答案：**

```java
public static int[] leftRotateArray(int[] nums, int k) {
    k %= nums.length; // 处理旋转次数大于数组长度的情况
    int[] rotated = new int[nums.length];
    for (int i = 0; i < nums.length; i++) {
        rotated[i] = nums[(i + k) % nums.length]; // 计算新位置
    }
    return rotated;
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    int k = 2;
    System.out.println("Rotated: " + Arrays.toString(leftRotateArray(nums, k)));
}
```





## 9. 数组是否有序

**描述**: 编写一个 Java 方法判断数组是否为升序排列。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `true`

**方法签名**:

```java
public static boolean isSorted(int[] nums);
```

**答案：**

```java
public static boolean isSorted(int[] nums) {
    for (int i = 1; i < nums.length; i++) { // 遍历数组
        if (nums[i] < nums[i - 1]) return false; // 检查是否降序
    }
    return true; // 如果所有元素都符合升序，返回 true
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    System.out.println("Is Sorted: " + isSorted(nums));
}
```



## 10. 数组的子数组之和最大值

**描述**: 编写一个 Java 方法，找出具有最大和的连续子数组，并返回其和。

**输入示例**: `int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};`

**输出示例**: `6`（子数组 `[4, -1, 2, 1]` 的和）

**方法签名**:

```java
public static int maxSubArraySum(int[] nums);
```

**答案：**

```java
public static boolean isSorted(int[] nums) {
    for (int i = 1; i < nums.length; i++) { // 遍历数组
        if (nums[i] < nums[i - 1]) return false; // 检查是否降序
    }
    return true; // 如果所有元素都符合升序，返回 true
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    System.out.println("Is Sorted: " + isSorted(nums));
}
```





## 11. 统计数组中出现的元素个数

- **描述**：给定一个整数数组，统计每个元素出现的次数。

- **输入**：

    ```java
    int[] arr = {1, 2, 2, 3, 3, 3, 4};
    ```

- **输出**：

    ```java
    1: 1, 2: 2, 3: 3, 4: 1
    ```

    



## 12. 寻找数组中的重复元素

- **描述**：给定一个整数数组，找到数组中所有重复出现的元素。

- **输入**： 

    ```java
    int[] arr = {1, 2, 3, 2, 4, 5, 1};
    ```

- **输出：** 

    ```java
    [1, 2]
    ```

    





## 13. **合并两个已排序数组**

- **描述**：给定两个已排序的数组，将其合并成一个新的已排序数组。

- **输入：** 

    ```java
    int[] arr1 = {1, 3, 5};
    int[] arr2 = {2, 4, 6};
    ```

- **输出：**

    ```java
    [1, 2, 3, 4, 5, 6]
    ```

    



## 14. 数组中的第二大元素

- **描述**：给定一个数组，找出数组中的第二大元素。

- **输入**：

    ```java 
    int[] arr = {10, 20, 4, 45, 99};
    ```

- **输出**：

     ```java
     45
     ```

    

## 15. 数组中的奇偶数分离

- **描述**：给定一个整数数组，将其中的奇数和偶数分开，返回一个新数组，奇数在前，偶数在后。

- **输入**： 

    ```java 
    int[] arr = {1, 2, 3, 4, 5, 6};
    ```

- **输出**：

    ```java 
    [1, 3, 5, 2, 4, 6]
    ```

- **扩展**：如果觉得轻松，你可以尝试：在奇偶分离后，分别对奇偶进行排序，例如原本的数组是无序的！















































欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)


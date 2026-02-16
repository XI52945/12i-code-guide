export const syntax = [
  {
    concept: '打印输出 Print',
    javascript: 'console.log("Hello")',
    python: 'print("Hello")',
    java: 'System.out.println("Hello");',
    cpp: 'std::cout << "Hello" << std::endl;',
    go: 'fmt.Println("Hello")',
    rust: 'println!("Hello");'
  },
  {
    concept: '变量声明 Variable',
    javascript: 'let x = 10; const y = 20;',
    python: 'x = 10\ny = 20 (无常量关键字)',
    java: 'int x = 10; final int y = 20;',
    cpp: 'int x = 10; const int y = 20;',
    go: 'var x int = 10\nconst y = 20',
    rust: 'let mut x = 10;\nlet y = 20; (默认不可变)'
  },
  {
    concept: '函数定义 Function',
    javascript: 'function add(a, b) { return a + b; }',
    python: 'def add(a, b):\n    return a + b',
    java: 'public int add(int a, int b) {\n    return a + b;\n}',
    cpp: 'int add(int a, int b) {\n    return a + b;\n}',
    go: 'func add(a int, b int) int {\n    return a + b\n}',
    rust: 'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}'
  },
  {
    concept: '条件判断 If-Else',
    javascript: 'if (x > 0) { ... } else { ... }',
    python: 'if x > 0:\n    ...\nelse:\n    ...',
    java: 'if (x > 0) { ... } else { ... }',
    cpp: 'if (x > 0) { ... } else { ... }',
    go: 'if x > 0 { ... } else { ... }',
    rust: 'if x > 0 { ... } else { ... }'
  },
  {
    concept: '循环 Loop',
    javascript: 'for (let i = 0; i < 10; i++) { ... }',
    python: 'for i in range(10):\n    ...',
    java: 'for (int i = 0; i < 10; i++) { ... }',
    cpp: 'for (int i = 0; i < 10; i++) { ... }',
    go: 'for i := 0; i < 10; i++ { ... }',
    rust: 'for i in 0..10 { ... }'
  },
  {
    concept: '类 Class',
    javascript: 'class Dog { bark() { ... } }',
    python: 'class Dog:\n    def bark(self): ...',
    java: 'public class Dog {\n    void bark() { ... }\n}',
    cpp: 'class Dog {\npublic:\n    void bark() { ... }\n};',
    go: 'type Dog struct {}\nfunc (d Dog) Bark() { ... }',
    rust: 'struct Dog;\nimpl Dog {\n    fn bark(&self) { ... }\n}'
  },
  {
    concept: '继承 Inheritance',
    javascript: 'class Dog extends Animal { ... }',
    python: 'class Dog(Animal):\n    ...',
    java: 'public class Dog extends Animal { ... }',
    cpp: 'class Dog : public Animal { ... };',
    go: 'type Dog struct {\n    Animal // 嵌入字段\n}',
    rust: 'impl Animal for Dog { ... } // Trait 实现'
  },
  {
    concept: '数组/列表 List',
    javascript: 'const arr = [1, 2, 3];',
    python: 'arr = [1, 2, 3]',
    java: 'int[] arr = {1, 2, 3};',
    cpp: 'int arr[] = {1, 2, 3};',
    go: 'arr := []int{1, 2, 3}',
    rust: 'let arr = vec![1, 2, 3];'
  },
  {
    concept: '字典/Map Map',
    javascript: 'const map = { a: 1 };',
    python: 'map = {"a": 1}',
    java: 'Map<String, Integer> map = new HashMap<>();',
    cpp: 'std::map<string, int> map;',
    go: 'map := make(map[string]int)',
    rust: 'let mut map = HashMap::new();'
  },
  {
    concept: '异常处理 Try-Catch',
    javascript: 'try { ... } catch (e) { ... }',
    python: 'try:\n    ...\nexcept Exception as e:\n    ...',
    java: 'try { ... } catch (Exception e) { ... }',
    cpp: 'try { ... } catch (exception& e) { ... }',
    go: 'if err != nil {\n    return err\n}',
    rust: 'match result {\n    Ok(val) => ...,\n    Err(e) => ...\n}'
  },
  {
    concept: '异步 Async',
    javascript: 'async function() { await ... }',
    python: 'async def foo():\n    await ...',
    java: 'CompletableFuture.supplyAsync(...)',
    cpp: 'std::async(...)',
    go: 'go func() { ... }()',
    rust: 'async fn foo() { ... .await }'
  },
  {
    concept: '导入 Import',
    javascript: 'import { foo } from "./bar";',
    python: 'from bar import foo',
    java: 'import com.example.bar.Foo;',
    cpp: '#include "bar.h"',
    go: 'import "example.com/bar"',
    rust: 'use crate::bar::Foo;'
  },
  {
    concept: '字符串操作 String',
    javascript: 's.split(","); s.substring(0, 5); `Hello ${name}`',
    python: 's.split(",")\ns[0:5]\nf"Hello {name}"',
    java: 's.split(","); s.substring(0, 5); String.format("Hello %s", name);',
    cpp: 's.substr(0, 5); // C++ string split 较繁琐',
    go: 'strings.Split(s, ",")\ns[0:5]\nfmt.Sprintf("Hello %s", name)',
    rust: 's.split(",").collect();\n&s[0..5];\nformat!("Hello {}", name);'
  },
  {
    concept: '正则 Regex',
    javascript: '/\\d+/.test("123"); "123".match(/\\d+/);',
    python: 'import re\nre.match(r"\\d+", "123")',
    java: 'Pattern.matches("\\\\d+", "123");',
    cpp: 'std::regex_match("123", std::regex("\\\\d+"));',
    go: 'regexp.MatchString("\\d+", "123")',
    rust: 'Regex::new(r"\\d+").unwrap().is_match("123");'
  },
  {
    concept: '文件读写 File I/O',
    javascript: 'fs.readFileSync("file.txt", "utf8");\nfs.writeFileSync("file.txt", "data");',
    python: 'with open("file.txt", "r") as f:\n    data = f.read()',
    java: 'Files.readString(Path.of("file.txt"));',
    cpp: 'std::ifstream f("file.txt");',
    go: 'data, err := ioutil.ReadFile("file.txt")',
    rust: 'let data = fs::read_to_string("file.txt")?;'
  },
  {
    concept: '网络请求 HTTP',
    javascript: 'fetch("https://api.com").then(res => res.json())',
    python: 'import requests\nrequests.get("https://api.com")',
    java: 'HttpClient.newHttpClient().send(...)',
    cpp: '使用 libcurl 或 cpp-httplib',
    go: 'http.Get("https://api.com")',
    rust: 'reqwest::get("https://api.com").await?'
  },
  {
    concept: 'JSON 处理',
    javascript: 'JSON.parse(str); JSON.stringify(obj);',
    python: 'json.loads(str)\njson.dumps(obj)',
    java: 'ObjectMapper.readValue(str, Class.class); // Jackson',
    cpp: 'json::parse(str); // nlohmann/json',
    go: 'json.Unmarshal([]byte(str), &obj)\njson.Marshal(obj)',
    rust: 'serde_json::from_str(str)?;\nserde_json::to_string(&obj)?;'
  },
  {
    concept: '日期时间 Date/Time',
    javascript: 'new Date().toISOString();',
    python: 'datetime.now().isoformat()',
    java: 'LocalDateTime.now();',
    cpp: 'std::chrono::system_clock::now();',
    go: 'time.Now().Format(time.RFC3339)',
    rust: 'Utc::now(); // chrono crate'
  },
  {
    concept: '随机数 Random',
    javascript: 'Math.random(); // 0.0 - 1.0',
    python: 'import random\nrandom.random()',
    java: 'Math.random();\nnew Random().nextInt(100);',
    cpp: 'rand() % 100;',
    go: 'rand.Float64()\nrand.Intn(100)',
    rust: 'rand::thread_rng().gen_range(0..100);'
  },
  {
    concept: 'Lambda / Closure',
    javascript: '(x) => x + 1',
    python: 'lambda x: x + 1',
    java: 'x -> x + 1',
    cpp: '[](int x) { return x + 1; }',
    go: 'func(x int) int { return x + 1 }',
    rust: '|x| x + 1'
  },
  {
    concept: '环境变量 Env Vars',
    javascript: 'process.env.PORT',
    python: 'import os\nos.environ.get("PORT")',
    java: 'System.getenv("PORT");',
    cpp: 'std::getenv("PORT");',
    go: 'os.Getenv("PORT")',
    rust: 'std::env::var("PORT").unwrap();'
  },
  {
    concept: '命令行参数 Args',
    javascript: 'process.argv',
    python: 'import sys\nsys.argv',
    java: 'public static void main(String[] args)',
    cpp: 'int main(int argc, char* argv[])',
    go: 'os.Args',
    rust: 'std::env::args().collect();'
  },
  {
    concept: '类型转换 Casting',
    javascript: 'Number("123"); String(123);',
    python: 'int("123")\nstr(123)',
    java: 'Integer.parseInt("123");\nString.valueOf(123);',
    cpp: 'std::stoi("123");\nstd::to_string(123);',
    go: 'strconv.Atoi("123")\nstrconv.Itoa(123)',
    rust: '"123".parse::<i32>().unwrap();\n123.to_string();'
  },
  {
    concept: '集合 Set',
    javascript: 'new Set([1, 2, 2]);',
    python: '{1, 2, 2} or set([1, 2])',
    java: 'new HashSet<>(Arrays.asList(1, 2));',
    cpp: 'std::set<int> s = {1, 2};',
    go: '// map[int]bool 模拟\nm := map[int]bool{1: true}',
    rust: 'HashSet::from([1, 2]);'
  },
  {
    concept: '模式匹配 Match/Switch',
    javascript: 'switch(x) { case 1: ... }',
    python: 'match x:\n    case 1: ...',
    java: 'switch(x) { case 1 -> ... }',
    cpp: 'switch(x) { case 1: ... }',
    go: 'switch x { case 1: ... }',
    rust: 'match x {\n    1 => ...,\n    _ => ...\n}'
  }
];

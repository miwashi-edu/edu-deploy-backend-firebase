# edu-deploy-backend-firebase

## Instructions

> Ändra projektstruktur till ./src istället för ./functions

### Byt namn på functions
```bash
cd ~
cd ws
cd test-firebase-functions
mv functions src
```

### Ändra firebase.json

```bash
cat > firebase.json << 'EOF'
{
  "functions": [
    {
      "source": "src",
      "codebase": "default",
      "ignore": [
        "node_modules",
        ".git",
        "firebase-debug.log",
        "firebase-debug.*.log",
        "*.local"
      ]
    }
  ]
}
EOF
```


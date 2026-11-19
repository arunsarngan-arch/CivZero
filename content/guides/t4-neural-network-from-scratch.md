---
id: "t4-neural-network-from-scratch"
title: "How to Build an AI Tool & Neural Network Model from First Principles"
tier: 6
category: "Computing & Software"
read_time: "22 min"
difficulty: "Extreme"
summary: "The definitive engineering blueprint for building an artificial intelligence model from scratch: mathematical neuron foundations, activation functions, backpropagation calculus, matrix vectorized execution, the Transformer Self-Attention architecture, and dependency-free implementation."
tags: "ai, machine learning, neural network, transformer, attention, backpropagation, algorithms, mathematics, computing"
---

When rebuilding civilization, human memory and physical encyclopedias face limits: paper degrades, specialists perish, and complex multi-variable engineering challenges (such as optimizing metallurgical smelting, calculating structural aerodynamics, or triaging obscure pathologies) exceed single-human cognitive bandwidth.

An **Artificial Intelligence (AI) Model** is a mathematical computational engine capable of learning non-linear functional representations from empirical data. It is not magic; it is **linear algebra, multivariable calculus, and iterative optimization** executed on digital silicon.

This guide provides the complete blueprint to construct, train, and deploy an AI model from first mathematical principles without external libraries, cloud APIs, or pre-existing frameworks.

```
       5 FOUNDATIONS OF ARTIFICIAL INTELLIGENCE
┌────────────────────────────────────────────────────────┐
│ 1. THE PERCEPTRON     → Dot products & non-linearity   │
│ 2. LOSS METRIC        → Quantifying prediction error   │
│ 3. BACKPROPAGATION    → Analytical gradient chain rule │
│ 4. MATRIX VECTORIZATION → Parallel SIMD execution      │
│ 5. ATTENTION MECHANISM → Transformer self-attention QKV│
└────────────────────────────────────────────────────────┘
```

---

### Step 1: The Biological & Mathematical Neuron

At its fundamental layer, an artificial neural network consists of interconnected nodes ("neurons") modeled after biological synapses.

```
Inputs (x)       Weights (w)        Summation & Bias          Activation (a)
 x₁ ─────────────── w₁ ─────────┐
                                │
 x₂ ─────────────── w₂ ─────────┼───> Σ (wᵢ · xᵢ) + b ────> [ Non-Linear f(z) ] ───> Output (a)
                                │
 xₙ ─────────────── wₙ ─────────┘
```

#### 1. The Forward Dot-Product Formulation
For a single neuron receiving an input vector $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$:
$$z = \mathbf{w}^T \mathbf{x} + b = \sum_{i=1}^{n} w_i x_i + b$$
Where:
* $\mathbf{w}$ is the weight vector (representing synaptic connection strengths).
* $b$ is the scalar bias (allowing the activation threshold to shift independently of inputs).
* $z$ is the pre-activation net input.

#### 2. Mandatory Non-Linear Activation Functions
If a network only uses linear sums ($z = \mathbf{w}^T \mathbf{x} + b$), stacking 100 layers collapses mathematically into a single linear transformation ($W_2(W_1 x) = W_{\text{combined}} x$). To learn non-linear boundaries (such as fluid dynamics, language syntax, or chemical reactions), non-linear activation functions are required:

1. **Rectified Linear Unit (ReLU):**
   $$f(z) = \max(0, z) \quad|\quad f'(z) = \begin{cases} 1 & \text{if } z > 0 \\ 0 & \text{if } z \le 0 \end{cases}$$
   *Advantage:* Computationally trivial to calculate; prevents gradient saturation in deep networks.
2. **Sigmoid (Logistic Activation):**
   $$\sigma(z) = \frac{1}{1 + e^{-z}} \quad|\quad \sigma'(z) = \sigma(z)(1 - \sigma(z))$$
   *Advantage:* Compresses values strictly into range $(0, 1)$, ideal for binary classification probabilities.
3. **Softmax (Multi-Class Probability Distribution):**
   $$P(y = i \mid \mathbf{z}) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}$$
   *Advantage:* Normalizes a vector of $K$ raw real numbers into a categorical probability distribution summing to exactly $1.0$.

---

### Step 2: Quantifying Error via Objective Loss Functions

To improve, a model must mathematically evaluate how far its current predictions ($\hat{\mathbf{y}}$) deviate from ground truth reality ($\mathbf{y}$).

* **Mean Squared Error (MSE - for Continuous Regression):**
  $$\mathcal{L}_{\text{MSE}} = \frac{1}{2N} \sum_{k=1}^{N} (y_k - \hat{y}_k)^2$$
* **Categorical Cross-Entropy (for Classification & Language Tokens):**
  $$\mathcal{L}_{\text{CE}} = - \sum_{k=1}^{K} y_k \ln(\hat{y}_k)$$
  Where $y_k$ is the target indicator ($0$ or $1$) and $\hat{y}_k$ is the predicted probability. If the model assigns probability $0.01$ to the true target, loss approaches infinity ($\ln(0.01) = -4.6$).

---

### Step 3: Analytical Backpropagation via Multivariable Calculus

Backpropagation is the engine of machine learning. It calculates the exact partial derivative (gradient) of the scalar loss $\mathcal{L}$ with respect to every single parameter (weight $w$ and bias $b$) in the network by applying the **Calculus Chain Rule**.

#### 1. The Gradient Flow Schematic

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="nnGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <marker id="arrowSky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/>
    </marker>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#nnGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">DEEP NEURAL NETWORK: FORWARD INFERENCE &amp; BACKPROPAGATION CALCULUS</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">MULTIVARIABLE GRADIENT DESCENT</text>

  <!-- STAGE 1: INPUT LAYER VECTOR X (LEFT) -->
  <g id="inputLayer" transform="translate(40, 65)">
    <rect x="0" y="0" width="110" height="280" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>
    <rect x="8" y="10" width="94" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="18" cy="20" r="7" fill="#0284c7"/>
    <text x="18" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="58" y="24" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">INPUT X</text>

    <!-- Neurons x1, x2, x3 -->
    <circle cx="55" cy="80" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="84" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">x₁</text>
    <circle cx="55" cy="150" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="154" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">x₂</text>
    <circle cx="55" cy="220" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="224" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">x₃</text>
    <text x="55" y="260" fill="#64748b" font-size="8" font-family="monospace" text-anchor="middle">Features [N×1]</text>
  </g>

  <!-- FORWARD SYNAPSES W[1] (INPUT TO HIDDEN) -->
  <g stroke="#38bdf8" stroke-width="1.2" opacity="0.45">
    <line x1="113" y1="145" x2="225" y2="135"/>
    <line x1="113" y1="145" x2="225" y2="185"/>
    <line x1="113" y1="145" x2="225" y2="235"/>
    <line x1="113" y1="145" x2="225" y2="285"/>
    <line x1="113" y1="215" x2="225" y2="135"/>
    <line x1="113" y1="215" x2="225" y2="185"/>
    <line x1="113" y1="215" x2="225" y2="235"/>
    <line x1="113" y1="215" x2="225" y2="285"/>
    <line x1="113" y1="285" x2="225" y2="135"/>
    <line x1="113" y1="285" x2="225" y2="185"/>
    <line x1="113" y1="285" x2="225" y2="235"/>
    <line x1="113" y1="285" x2="225" y2="285"/>
  </g>

  <!-- STAGE 2: HIDDEN LAYER H (CENTER-LEFT) -->
  <g id="hiddenLayer" transform="translate(205, 65)">
    <rect x="0" y="0" width="140" height="280" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>
    <rect x="8" y="10" width="124" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="18" cy="20" r="7" fill="#d97706"/>
    <text x="18" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="74" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">HIDDEN LAYER H</text>

    <!-- Hidden Neurons h1..h4 -->
    <circle cx="70" cy="70" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="74" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">h₁</text>
    <circle cx="70" cy="120" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="124" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">h₂</text>
    <circle cx="70" cy="170" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="174" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">h₃</text>
    <circle cx="70" cy="220" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="224" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">h₄</text>
    <text x="70" y="260" fill="#f59e0b" font-size="8" font-family="monospace" text-anchor="middle">a = ReLU(W₁x + b₁)</text>
  </g>

  <!-- FORWARD SYNAPSES W[2] (HIDDEN TO OUTPUT) -->
  <g stroke="#f59e0b" stroke-width="1.2" opacity="0.45">
    <line x1="345" y1="135" x2="445" y2="165"/>
    <line x1="345" y1="135" x2="445" y2="245"/>
    <line x1="345" y1="185" x2="445" y2="165"/>
    <line x1="345" y1="185" x2="445" y2="245"/>
    <line x1="345" y1="235" x2="445" y2="165"/>
    <line x1="345" y1="235" x2="445" y2="245"/>
    <line x1="345" y1="285" x2="445" y2="165"/>
    <line x1="345" y1="285" x2="445" y2="245"/>
  </g>

  <!-- STAGE 3: OUTPUT LAYER ŷ (CENTER-RIGHT) -->
  <g id="outputLayer" transform="translate(425, 65)">
    <rect x="0" y="0" width="130" height="280" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>
    <rect x="8" y="10" width="114" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="18" cy="20" r="7" fill="#10b981"/>
    <text x="18" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="68" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">OUTPUT ŷ</text>

    <!-- Output Neurons y1, y2 -->
    <circle cx="65" cy="100" r="18" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="104" fill="#86efac" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">ŷ₁</text>
    <circle cx="65" cy="180" r="18" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="184" fill="#86efac" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">ŷ₂</text>
    <text x="65" y="240" fill="#10b981" font-size="8" font-family="monospace" text-anchor="middle">Softmax / Sigmoid</text>
    <text x="65" y="254" fill="#64748b" font-size="7.5" font-family="monospace" text-anchor="middle">Predicted Vector</text>
  </g>

  <!-- STAGE 4: LOSS FUNCTION & GRADIENT RETROACTION (RIGHT) -->
  <g id="lossLayer" transform="translate(610, 65)">
    <rect x="0" y="0" width="170" height="280" rx="8" fill="#0d1526" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="8" y="10" width="154" height="20" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="18" cy="20" r="7" fill="#ef4444"/>
    <text x="18" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
    <text x="88" y="24" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">LOSS &amp; BACKPROP</text>

    <!-- Loss Computation Engine Block -->
    <rect x="15" y="45" width="140" height="70" rx="4" fill="#290707" stroke="#ef4444" stroke-width="1.2"/>
    <text x="85" y="65" fill="#fca5a5" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">LOSS FUNCTION ℒ</text>
    <text x="85" y="80" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">MSE = ½Σ(y - ŷ)²</text>
    <text x="85" y="95" fill="#fde68a" font-size="8" font-family="monospace" text-anchor="middle">CE = -Σ y·ln(ŷ)</text>

    <!-- Ground truth feed into loss -->
    <text x="85" y="132" fill="#38bdf8" font-size="8.5" font-family="monospace" text-anchor="middle">Ground Truth (y)</text>
    <path d="M 85 138 L 85 115" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowSky)"/>

    <!-- Chain Rule Derivative Equation -->
    <rect x="12" y="150" width="146" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-dasharray="2,2"/>
    <text x="85" y="168" fill="#f59e0b" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">CHAIN RULE ERROR:</text>
    <text x="85" y="182" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">δ^{[L]} = (ŷ - y) ⊙ f'(z)</text>
    <text x="85" y="196" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">δ^{[l]} = (W^T δ) ⊙ f'(z)</text>

    <!-- Backward Pass Vector Vector Arrow -->
    <path d="M 120 220 L 50 220" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
    <text x="85" y="240" fill="#ef4444" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">← RETRO-GRADIENT</text>
    <text x="85" y="254" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Updates Weights (W - η·dW)</text>
  </g>

  <!-- FORWARD & BACKWARD FLOW PROCESS ARROWS -->
  <g transform="translate(40, 355)">
    <!-- Forward Vector -->
    <path d="M 50 10 L 450 10" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowSky)"/>
    <text x="250" y="5" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">FORWARD PASS: Z = W·A + B ──&gt; A = f(Z)</text>

    <!-- Backward Vector -->
    <path d="M 450 25 L 50 25" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrowRed)"/>
    <text x="250" y="36" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">BACKWARD GRADIENT: dℒ/dW = δ · A^T (CHAIN RULE ACCELERATION)</text>
  </g>

  <!-- MATHEMATICAL OPTIMIZATION MANDATE FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
  <circle cx="45" cy="423" r="10" fill="#10b981"/>
  <text x="45" y="427" fill="#0f172a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">∑</text>
  <text x="65" y="420" fill="#86efac" font-size="10.5" font-weight="bold" font-family="monospace">SGD PARAMETER UPDATE: W_new = W_old - η · (∂ℒ / ∂W) | B_new = B_old - η · δ</text>
  <text x="65" y="434" fill="#cbd5e1" font-size="8.5" font-family="monospace">Learning rate η dictates convergence speed. No magic or external runtime: purely multivariable calculus and matrix inner dot products.</text>
</svg>
```

#### 2. The Analytical Gradient Derivation
Let layer $l$ have pre-activation $z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}$ and activation $a^{[l]} = f(z^{[l]})$.

1. **Error at the Output Layer ($L$):**
   $$\delta^{[L]} = \frac{\partial \mathcal{L}}{\partial z^{[L]}} = \frac{\partial \mathcal{L}}{\partial a^{[L]}} \odot f'(z^{[L]})$$
   *(For Mean Squared Error with Sigmoid: $\delta^{[L]} = (a^{[L]} - y) \odot \sigma(z^{[L]})(1 - \sigma(z^{[L]}))$.)*
2. **Error Backpropagation to Hidden Layers ($l$):**
   $$\delta^{[l]} = \left( (W^{[l+1]})^T \delta^{[l+1]} \right) \odot f'(z^{[l]})$$
   The error gradient from the future layer is reflected backward through the transpose of the weight matrix and gated by the local derivative of the activation function.
3. **Parameter Gradient Computations:**
   $$\frac{\partial \mathcal{L}}{\partial W^{[l]}} = \delta^{[l]} (a^{[l-1]})^T \quad|\quad \frac{\partial \mathcal{L}}{\partial b^{[l]}} = \delta^{[l]}$$
4. **Stochastic Gradient Descent (SGD) Parameter Update:**
   $$W^{[l]} \leftarrow W^{[l]} - \eta \frac{\partial \mathcal{L}}{\partial W^{[l]}} \quad|\quad b^{[l]} \leftarrow b^{[l]} - \eta \frac{\partial \mathcal{L}}{\partial b^{[l]}}$$
   Where $\eta$ is the learning rate hyperparameter (typically $0.001$ to $0.05$).

---

### Step 4: The Transformer Architecture (Large Language Models)

While multi-layer perceptrons excel at tabulating numbers, modern reasoning models and Generative AI are built on the **Transformer Architecture** (Vaswani et al., 2017). Transformers process sequential information (text, genetic code, mathematical proofs) in parallel using the **Self-Attention Mechanism**.

#### 1. Scaled Dot-Product Self-Attention
Self-attention allows every word/token in a sequence to attend to and cross-reference every other word in the sequence simultaneously, dynamically computing contextual meaning.

For an input sequence matrix $X$, we multiply by learned projection weight matrices to create three distinct matrices:
* **Queries ($Q = X W_Q$):** What the current token is seeking.
* **Keys ($K = X W_K$):** What features each token holds.
* **Values ($V = X W_V$):** The actual informational content of each token.

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{Q K^T}{\sqrt{d_k}}\right) V$$

Where:
* $Q K^T$ calculates the pairwise dot-product compatibility score between every token pair.
* $\sqrt{d_k}$ is the scaling factor (dimension of the key vectors) that prevents extreme values from driving softmax gradients into near-zero saturation.
* $\text{softmax}(\dots)$ produces an attention weight matrix where each row sums to $1.0$.
* Multiplying by $V$ produces a context-rich blended output vector.

```
       SELF-ATTENTION MATRIX WORKFLOW
┌──────────────────────────────────────────────┐
│ Input Sequence: "Purify brackish well water" │
├──────────────────────────────────────────────┤
│ 1. Project into Q, K, V matrices             │
│ 2. Compute Attention Matrix:                 │
│    "Purify" attends heavily to "water" (0.82)│
│    "brackish" attends to "well" (0.74)       │
│ 3. Multiply by Value matrix V                │
│ 4. Pass to Multi-Layer Feed-Forward Network  │
│ 5. Predict Next Token: "using solar still"   │
└──────────────────────────────────────────────┘
```

---

### Step 5: Complete Standalone Implementation (Zero Dependencies)

Below is an operational, self-contained implementation in pure standard Python. It builds a multi-layer neural network from scratch, implements matrix multiplication, forward pass, analytic backpropagation, and trains to solve a non-linear logic problem with zero imports:

```python
import math
import random

class Matrix:
    """Minimalist Matrix Engine with zero external dependencies."""
    def __init__(self, rows, cols, init_fn=None):
        self.rows = rows
        self.cols = cols
        if init_fn:
            self.data = [[init_fn() for _ in range(cols)] for _ in range(rows)]
        else:
            self.data = [[0.0 for _ in range(cols)] for _ in range(rows)]

    @staticmethod
    def randn(rows, cols, scale=0.5):
        # Xavier/He normal initialization
        return Matrix(rows, cols, lambda: random.uniform(-scale, scale))

    def matmul(self, other):
        assert self.cols == other.rows, f"Shape mismatch: {self.cols} != {other.rows}"
        res = Matrix(self.rows, other.cols)
        for i in range(self.rows):
            for k in range(self.cols):
                s = self.data[i][k]
                for j in range(other.cols):
                    res.data[i][j] += s * other.data[k][j]
        return res

    def add(self, other):
        res = Matrix(self.rows, self.cols)
        for i in range(self.rows):
            for j in range(self.cols):
                res.data[i][j] = self.data[i][j] + other.data[i][j]
        return res

    def transpose(self):
        res = Matrix(self.cols, self.rows)
        for i in range(self.rows):
            for j in range(self.cols):
                res.data[j][i] = self.data[i][j]
        return res

# Activation functions & their analytical derivatives
def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-max(min(x, 20), -20)))

def d_sigmoid(y):
    # Derivative where y = sigmoid(x)
    return y * (1.0 - y)

class NeuralNetwork:
    """Complete 2-Layer Perceptron (Input -> Hidden -> Output)."""
    def __init__(self, in_dim, hidden_dim, out_dim):
        self.W1 = Matrix.randn(hidden_dim, in_dim)
        self.b1 = Matrix(hidden_dim, 1)
        self.W2 = Matrix.randn(out_dim, hidden_dim)
        self.b2 = Matrix(out_dim, 1)

    def forward(self, x_vec):
        # Input shape: (in_dim, 1)
        self.x = x_vec
        # Hidden Layer: z1 = W1*x + b1
        self.z1 = self.W1.matmul(self.x).add(self.b1)
        # Activation: a1 = sigmoid(z1)
        self.a1 = Matrix(self.z1.rows, 1)
        for i in range(self.z1.rows):
            self.a1.data[i][0] = sigmoid(self.z1.data[i][0])

        # Output Layer: z2 = W2*a1 + b2
        self.z2 = self.W2.matmul(self.a1).add(self.b2)
        # Activation: a2 = sigmoid(z2)
        self.a2 = Matrix(self.z2.rows, 1)
        for i in range(self.z2.rows):
            self.a2.data[i][0] = sigmoid(self.z2.data[i][0])
        return self.a2

    def train_step(self, x_vec, target_vec, lr=0.5):
        # 1. Forward Pass
        out = self.forward(x_vec)

        # 2. Output Error Gradient: dL/dz2 = (a2 - y) * d_sigmoid(a2)
        delta2 = Matrix(self.W2.rows, 1)
        loss = 0.0
        for i in range(self.W2.rows):
            err = out.data[i][0] - target_vec.data[i][0]
            loss += 0.5 * (err ** 2)
            delta2.data[i][0] = err * d_sigmoid(out.data[i][0])

        # 3. Hidden Error Gradient: delta1 = (W2^T * delta2) * d_sigmoid(a1)
        w2_t = self.W2.transpose()
        back_err = w2_t.matmul(delta2)
        delta1 = Matrix(self.W1.rows, 1)
        for i in range(self.W1.rows):
            delta1.data[i][0] = back_err.data[i][0] * d_sigmoid(self.a1.data[i][0])

        # 4. Compute Gradients and Update Parameters
        # dW2 = delta2 * a1^T
        a1_t = self.a1.transpose()
        dW2 = delta2.matmul(a1_t)
        for i in range(self.W2.rows):
            for j in range(self.W2.cols):
                self.W2.data[i][j] -= lr * dW2.data[i][j]
            self.b2.data[i][0] -= lr * delta2.data[i][0]

        # dW1 = delta1 * x^T
        x_t = self.x.transpose()
        dW1 = delta1.matmul(x_t)
        for i in range(self.W1.rows):
            for j in range(self.W1.cols):
                self.W1.data[i][j] -= lr * dW1.data[i][j]
            self.b1.data[i][0] -= lr * delta1.data[i][0]

        return loss

# Operational Verification: Training on Non-Linear XOR
if __name__ == '__main__':
    nn = NeuralNetwork(in_dim=2, hidden_dim=4, out_dim=1)
    dataset = [
        ([[0.0], [0.0]], [[0.0]]),
        ([[0.0], [1.0]], [[1.0]]),
        ([[1.0], [0.0]], [[1.0]]),
        ([[1.0], [1.0]], [[0.0]])
    ]

    for epoch in range(10000):
        total_loss = 0.0
        for x_in, y_target in dataset:
            X = Matrix(2, 1)
            X.data = x_in
            Y = Matrix(1, 1)
            Y.data = y_target
            total_loss += nn.train_step(X, Y, lr=0.5)

    print("Post-Training Inference Predictions:")
    for x_in, _ in dataset:
        X = Matrix(2, 1)
        X.data = x_in
        pred = nn.forward(X).data[0][0]
        print(f"Input: {x_in[0][0]}, {x_in[1][0]} -> Prediction: {pred:.4f}")
```

---

### Step 6: Post-Collapse AI Strategy: Quantization & Edge Deployment

Building a multi-billion-parameter neural network during a rebuild is neither practical nor necessary. Instead, civilization preservation requires **Model Distillation & Integer Quantization**:

1. **Weight Quantization (FP32 $\to$ INT8 / INT4):**
   Standard floating-point numbers consume 32 bits ($4\,\text{bytes}$). Quantizing weights to 8-bit integers ($1\,\text{byte}$) reduces RAM footprint by $75\%$ and allows neural inference to execute on simple integer arithmetic units without expensive floating-point hardware (FPU):
   $$W_{\text{INT8}} = \text{round}\left( \frac{W_{\text{FP32}}}{\text{Scale}} \right) + \text{ZeroPoint}$$
2. **Salvage Microcontroller Deployment:** An 8-bit quantized diagnostic expert model with 500,000 parameters requires only **500 Kilobytes of storage** and can run inference on a salvaged 32-bit ARM Cortex-M or RISC-V microcontroller powered by a miniature 5-watt solar panel.
3. **Specialized Diagnostic Domains:**
   - **Pathology & Botany:** Convolutional pattern recognition for identifying bacterial rod morphology under optical microscopes and detecting crop blights.
   - **Chemical Stoichiometry:** Predicting reaction yields, acid titration neutralization, and blast furnace charge ratios.
   - **Civil Engineering:** Structural load optimization, bridge truss stress calculation, and fluid channel dynamics.

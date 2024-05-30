package main

// Some references:
// - https://www.reddit.com/r/leetcode/comments/19b2h09/really_hard_problem_in_amazon_oa/?sort=new
// - https://leetcode.com/discuss/interview-question/1678850/need-help-qa-question

import (
	"fmt"
	"math"
)

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func getMinErrors(errorString string, x int, y int) int {
	n := len(errorString)

	if n == 0 {
		return 0
	}

	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
		for j := range n {
			dp[i][j] = math.MaxInt32
		}
	}
	dp[0][0] = 0

	// fill in the dp table
	for i := 1; i < n+1; i++ {
		if errorString[i-1] == '0' || errorString[i-1] == '!' {
			for j := 0; j <= i; j++ {
				if dp[i-1][j] < math.MaxInt32 {
					dp[i][j] = min(dp[i][j], dp[i-1][j]+j*y)
				}
			}
		}

		if errorString[i-1] == '1' || errorString[i-1] == '!' {
			for j := 1; j < i; j++ {
				if dp[i-1][j-1] < math.MaxInt32 {
					dp[i][j] = min(dp[i][j], dp[i-1][j-1]+x*(i-j))
				}
			}
		}
	}

	ttlMin := 0
	for i := 0; i < n; i++ {
		ttlMin = min(ttlMin, dp[n-1][i])
	}

	return ttlMin
}

func main() {
	numOfMinErrorsOne := getMinErrors("101!1", 2, 3)
	numOfMinErrorsTwo := getMinErrors("10111", 2, 3)
	fmt.Printf("Minimum X: %d\n", numOfMinErrorsOne)
	fmt.Printf("Minimum X 2nd: %d\n", numOfMinErrorsTwo)
}
